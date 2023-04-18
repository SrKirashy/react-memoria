import * as C from "./App.styles";
import RestartIcon from "./svgs/restart.svg"
import logoImage from "./assets/devmemory_logo.png";
import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/Button";

const App = () => {

  const resetAndCreateGrid = () => {

  }

  return (
    <div>
      <C.Container>
        <C.Info>
          <C.LogoLink href="">
            <img src={logoImage} width="200" alt="" />
          </C.LogoLink>
          <C.InfoArea>
            <InfoItem label="Tempo" value="00:00" />
            <InfoItem label="Movimento" value="0"/>
          </C.InfoArea>

            <Button onClick={resetAndCreateGrid} label="Reiniciar" icon={RestartIcon}/>

        </C.Info>
        <C.GridArea>
          GridArea
        </C.GridArea>
      </C.Container>
    </div>
  );
}

export default App;
