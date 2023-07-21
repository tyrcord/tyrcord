import { PureComponent } from "react";
import Button from "./button";

import styles from "./saved-templates.module.scss";
import { Template } from "../logic/template.interface";

interface SavedTemplatesProps {
  templates: Template[];
  onLoadTemplate: (template: Template) => void;
  onDeleteTemplate: (index: number) => void;
}

class SavedTemplates extends PureComponent<SavedTemplatesProps> {
  render() {
    const { templates, onLoadTemplate, onDeleteTemplate } = this.props;

    return (
      <div className={styles.container}>
        <h2 className={styles.heading}>Saved Templates</h2>
        {templates.map((template, index) => (
          <div key={index} className={styles.template}>
            <p className={styles.templateName}>{template.name}</p>
            <div className={styles.buttons}>
              <Button
                onClick={() => onLoadTemplate(template)}
                className={styles.loadButton}
              >
                Load
              </Button>
              <Button
                onClick={() => onDeleteTemplate(index)}
                className={styles.deleteButton}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SavedTemplates;
