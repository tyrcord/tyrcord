import { PureComponent } from "react";

import styles from "./template-output.module.scss";

interface TemplateOutputProps {
  value: string;
}

class TemplateOutput extends PureComponent<TemplateOutputProps> {
  render() {
    const { value } = this.props;

    return (
      <section>
        <h2>Output</h2>
        <pre className={styles.pre}>{value}</pre>
      </section>
    );
  }
}

export default TemplateOutput;
