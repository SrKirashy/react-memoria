import { useState, useEffect } from "react";
import * as C from "./App.styles";
import RestartIcon from "./svgs/restart.svg"
import logoImage from "./assets/devmemory_logo.png";
import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/Button";
import { GridItemType } from "./types/GridItemType";


const App = () => {
  
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreateGrid() , []);

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
            <InfoItem label="Movimento" value={"0"}/>
          </C.InfoArea>

            <Button onClick={resetAndCreateGrid} label="Reiniciar" icon={RestartIcon}/>

        </C.Info>
        <C.GridArea>
          <C.Grid>

          </C.Grid>
        </C.GridArea>
      </C.Container>
    </div>
  );
}

export default App;
