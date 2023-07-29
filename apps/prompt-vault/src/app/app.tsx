/* eslint-disable @typescript-eslint/ban-types */
import { PureComponent } from 'react';
import TemplateInput from '../components/template-input';
import TemplateVariables from '../components/template-variables';
import TemplateOutput from '../components/template-output';
import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.scss';
import { parseAndInterpolateString } from '../logic/string.helper';
import Button from '../components/button';
import SavedTemplates from '../components/saved-templates';
import { Template } from '../logic/template.interface';

interface AppState {
  texts: string[];
  dictionary: { [key: string]: string };
  output: string;
  template: string;
  templateName: string;
  templateId: string;
  savedTemplates: Template[];
}

class App extends PureComponent<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      texts: [],
      dictionary: {},
      output: '',
      template: '',
      templateName: '',
      templateId: uuidv4(),
      savedTemplates: [],
    };
  }
  componentDidMount() {
    this.loadTemplates();
  }

  loadTemplates = () => {
    const savedTemplates = this.getSavedTemplatesFromLocalStorage();

    this.setState({ savedTemplates });
  };

  handleTextChange = (key: string, value: string) => {
    const { dictionary } = this.state;
    const newDictionary = {
      ...dictionary,
      [key]: value,
    };

    const output = parseAndInterpolateString(
      this.state.template,
      newDictionary,
    );

    this.setState({
      dictionary: newDictionary,
      output,
    });
  };

  handleTemplateChange = (template: string) => {
    const regex = /{{([^}]+)}}/g;
    const uniqueTexts = new Set<string>(template.match(regex));
    const output = parseAndInterpolateString(template, this.state.dictionary);

    this.setState({
      template,
      texts: Array.from(uniqueTexts),
      output,
    });
  };

  handleTemplateNameChange = (templateName: string) => {
    this.setState({ templateName });
  };

  handleClear = () => {
    this.setState({
      texts: [],
      dictionary: {},
      output: '',
      template: '',
      templateName: '',
      templateId: uuidv4(),
    });
  };

  handleSave = () => {
    let { savedTemplates } = this.state;
    const { template, templateName, templateId } = this.state;
    const existingTemplate = this.findTemplateById(templateId);
    savedTemplates = [...savedTemplates];

    if (existingTemplate) {
      // Update existing template
      existingTemplate.content = template;
      existingTemplate.name = templateName;
      console.log('will update existing template');
    } else {
      // Save new template
      const newTemplate = {
        id: uuidv4(),
        name: templateName,
        content: template,
      };

      savedTemplates.push(newTemplate);
      console.log('will save new template');
    }

    try {
      localStorage.setItem('templates', JSON.stringify(savedTemplates));
      this.setState({ savedTemplates });
      console.log('Template saved successfully');
    } catch (error) {
      console.error('Failed to save template: ', error);
    }
  };

  handleDeleteTemplate = (templateIndex: number) => {
    const { savedTemplates } = this.state;
    const newSavedTemplates = [...savedTemplates];
    newSavedTemplates.splice(templateIndex, 1);

    try {
      localStorage.setItem('templates', JSON.stringify(newSavedTemplates));
      this.setState({ savedTemplates: newSavedTemplates });
      this.loadTemplates();
      console.log('Template deleted successfully');
    } catch (error) {
      console.error('Failed to delete template: ', error);
    }
  };

  findTemplateById = (id: string) => {
    const { savedTemplates } = this.state;
    return savedTemplates.find((template) => template.id === id);
  };

  handleLoadTemplate = (template: Template) => {
    const { id } = template;
    const foundTemplate = this.findTemplateById(id);

    if (foundTemplate) {
      this.handleTemplateChange(foundTemplate.content);

      this.setState({
        templateId: foundTemplate.id,
        templateName: foundTemplate.name,
        template: foundTemplate.content,
      });
    }
  };

  handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(this.state.output);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  getSavedTemplatesFromLocalStorage = () => {
    const savedTemplatesString = localStorage.getItem('templates');

    if (savedTemplatesString) {
      return JSON.parse(savedTemplatesString);
    }

    return [];
  };

  render() {
    const {
      texts = [],
      template,
      output,
      templateName,
      savedTemplates,
    } = this.state;

    return (
      <div className={styles.App}>
        <div className={styles.content}>
          <div className={styles.container}>
            <h1>PromptVault</h1>

            <TemplateInput
              onTemplateNameChange={this.handleTemplateNameChange}
              onTemplateChange={this.handleTemplateChange}
              templateName={templateName}
              template={template}
            />
            {template && (
              <>
                <TemplateVariables
                  texts={texts}
                  onTextChange={this.handleTextChange}
                />
                <TemplateOutput value={output} />
              </>
            )}
          </div>
          <div className={styles.side}>
            <SavedTemplates
              templates={savedTemplates}
              onLoadTemplate={this.handleLoadTemplate}
              onDeleteTemplate={this.handleDeleteTemplate}
            />
          </div>
        </div>
        <div className={styles.actions}>
          <Button onClick={this.handleClear}>Clear</Button>
          <Button onClick={this.handleCopyToClipboard}>
            Copy to Clipboard
          </Button>
          <Button onClick={this.handleSave}>Save</Button>
        </div>
      </div>
    );
  }
}

export default App;
