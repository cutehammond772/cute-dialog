import * as Style from "@/App.style";
import * as header from "@/Header.style";
import * as footer from "@/Footer.style";

const App = () => {
  return (
    <Style.App>
      <Style.Header>
        <div className={header.title}>
          <span className="main">@cute-dialog</span>
          <span className="subject">CHAT</span>
        </div>
        <div className={header.menu}>
          <span>Introduction</span>
          <span>Examples</span>
          <span className="github">Github</span>
        </div>
      </Style.Header>
      <Style.Content>
        <Style.Section>
          <div className="title">Introduction</div>
          <div className="content">
            This is the example of chat dialog with @cute-dialog library.
          </div>
        </Style.Section>
      </Style.Content>
      <Style.Footer>
        <div className={footer.info}>
          <div>
            <span className="subject">Based on</span> 0.1.0-beta
          </div>
          <div>
            <span className="subject">Contract</span> cutehammond772@gmail.com
          </div>
        </div>
      </Style.Footer>
    </Style.App>
  );
};

export default App;
