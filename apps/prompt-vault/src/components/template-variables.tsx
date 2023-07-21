import { PureComponent } from "react";

import styles from "./template-variables.module.scss";

interface TemplateVariablesProps {
  onTextChange: (key: string, value: string) => void;
  texts: string[];
}

class TemplateVariables extends PureComponent<TemplateVariablesProps> {
  handleTextChange = (key: string, value: string) => {
    this.props.onTextChange(key, value);
  };

  render() {
    return (
      <div>
        <h2>Variables</h2>
        <form className={styles.form}>
          <ul className={styles.list}>{this.renderTexts()}</ul>
        </form>
      </div>
    );
  }

  renderTexts() {
    const { texts } = this.props;
    const pattern = /{{(.*?)}}/g;

    return texts?.map((text) => {
      const param = text.replace(pattern, (match, param) => {
        return param.trim();
      });

      const [key, defaultValue] = param.split("=").map((s: string) => s.trim());

      return (
        <li key={text}>
          <label>
            {key}
            <input
              type="text"
              placeholder={defaultValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const value = event.target.value;

                this.handleTextChange(key, value);
              }}
            />
          </label>
        </li>
      );
    });
  }
}

export default TemplateVariables;
