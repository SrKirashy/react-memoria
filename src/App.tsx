import { useState, useEffect } from "react";
import * as C from "./App.styles";
import RestartIcon from "./svgs/restart.svg"
import logoImage from "./assets/devmemory_logo.png";
import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/Button";
import { GridItemType } from "./types/GridItemType";
import {items} from "./data/items";


const App = () => {

  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreateGrid(), []);

  const resetAndCreateGrid = () => {
    // passo 1 - resetar o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);
    // passo 2 - criar o grid e começar o jogo
    // 2.1 - criar um grid vazio
    let tmpGrid: GridItemType[]=[];
    for(let i = 0; i < (items.length * 2); i++) tmpGrid.push({
      item: null, shown: false,permanentShown:false
    })
    // 2.2 - preencher o grid

    // 2.3 - jogar no state
    setGridItems(tmpGrid);

    //passo 3 - começar o jogo
    setPlaying(true);
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
            <InfoItem label="Movimento" value={"0"} />
          </C.InfoArea>

          <Button onClick={resetAndCreateGrid} label="Reiniciar" icon={RestartIcon} />

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
