'use strict';


function LikeButton() {
  const [table, setTable] = React.useState({
    row1: {td1: ""},
    row2: {td1: ""}
  });

  const onChandleHandler = (e) =>{
    const nameArray = e.target.id.split("_");
    console.log(e.target.innerHTML, e.target.id, nameArray)
    if(nameArray.length > 1){
        let rowName = nameArray[0];
        let tdName = nameArray[1];
        console.log(table[rowName])
        setTable({...table, [rowName] : {...table[rowName], [tdName]: e.target.innerHTML}})
    }
    
  }

  return (<div className="container">
  <div className="row">
      <div>Onboarding Calls</div>
      <div id="row1_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td1}</div>
      <div id="row1_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td2}</div>
      <div id="row1_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td3}</div>
      <div id="row1_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td4}</div>
    
    
  </div>
  <div className="row">
      <div>Google Search Console Access</div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
    
    
  </div>
 
  <div className="row">
      <div>Google Analytics Access</div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
    
    
  </div>

  <div className="row">
      <div>Website Access</div>
      <div id="row1_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td1}</div>
      <div id="row1_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td2}</div>
      <div id="row1_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td3}</div>
      <div id="row1_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td4}</div>
    
    
  </div>
  <div className="row">
      <div>Technical Audit </div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
    
    
  </div>
 
  <div className="row">
      <div>Anchor Text and Semantic Analysis</div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
    
    
  </div>
  <div className="row">
      <div>Competitor Analysis </div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
    
    
  </div>

  <div className="row">
      <div>Anchor Text/ URL mapping</div>
      <div id="row1_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td1}</div>
      <div id="row1_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td2}</div>
      <div id="row1_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td3}</div>
      <div id="row1_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td4}</div>
    
    
  </div>
  <div className="row">
      <div>Google Data Studio Report + Local Reporting Suite </div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
    
    
  </div>
 
  <div className="row">
      <div>Site Level Optimization</div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
    
    
  </div>
  <div className="row">
      <div>On Page Optimization</div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
    
    
  </div>
  <div className="row">
      <div>Content Creation </div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
    
    
  </div>

  <div className="row">
      <div>Content Publishing</div>
      <div id="row1_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td1}</div>
      <div id="row1_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td2}</div>
      <div id="row1_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td3}</div>
      <div id="row1_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row1.td4}</div>
    
    
  </div>
  <div className="row">
      <div>Premium Press Release </div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
    
    
  </div>
 
  <div className="row">
      <div>Authority Niche Placements</div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
  </div>

  <div className="row">
      <div>Review Management</div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
  </div>
 
  <div className="row">
      <div>Index Links</div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
  </div>
  <div className="row">
      <div>Video Recap</div>
      <div id="row2_td1" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td1}</div>
      <div id="row2_td2" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td2}</div>
      <div id="row2_td3" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td3}</div>
      <div id="row2_td4" className="rowItem" contentEditable={true} onInput={onChandleHandler}>{table.row2.td4}</div>
  </div>
  </div>)
}

const rootNode = document.getElementById('like-button-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));
