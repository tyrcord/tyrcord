import { PureComponent } from "react";
import styles from "./template-input.module.scss";

interface TemplateInputProps {
  onTemplateChange: (template: string) => void;
  onTemplateNameChange: (templateName: string) => void;
  template: string;
  templateName: string;
}

class TemplateInput extends PureComponent<TemplateInputProps> {
  handleTemplateChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const template = event.target.value;

    this.props.onTemplateChange(template);
  };

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    this.props.onTemplateNameChange(event.target.value);
  };

  render() {
    const { template, templateName } = this.props;

    return (
      <section className={styles.section}>
        <h2>Template</h2>
        <input
          type="text"
          value={templateName}
          onChange={this.handleNameChange}
          className={styles.name}
          placeholder="Template Name"
        />
        <textarea
          className={styles.template}
          placeholder="Enter your template"
          onChange={this.handleTemplateChange}
          value={template}
        ></textarea>
      </section>
    );
  }
}

export default TemplateInput;
