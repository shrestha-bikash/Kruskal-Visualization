import React, { useEffect, useState } from 'react'
import './App.css';
import { createCanvas } from 'algorithmx';
import { network1, network2 } from './networks';

let UnionFind = require('union-find');


function App() {
  const [network, updateNetwork] = useState(network1);
  const [isClicked, startAnimation] = useState(true);

  const prim = (net, nods, canvas) => {
    let maxW = 10000;
    let n;
    let filtered;
    let i = 0;
    let l = 0;

    let sorted = net.sort(function(a,b){ 
      var x = a.w < b.w? -1:1; 
      return x; 
    });

    console.log(sorted)

    let forest = new UnionFind(nods.length);

    let parent = []
    let rank = []
    let minNode, u, v, w, x, y;

    for(let node of nods){
      parent.push(node)
      rank.push(0)
    }
    console.log('parent', parent)

    while (l < (nods.length -1) && i < net.length) {
      minNode = sorted[i];
      console.log(minNode);
      u = minNode.e[0]
      v = minNode.e[1]
      w = minNode.w
      i = i + 1
      console.log('u v w', u,v,w)

      x = forest.find(u)
      y = forest.find(v)
      console.log('x,y', x,y)

      if (x != y) {
        l = l + 1;
        forest.link(u, v);
        console.log(u,v)

        canvas.node(u).highlight().size('1.25x')
        canvas.node(u).color('orange')
        canvas.pause(0.5)

        canvas.edge([u, v]).highlight(0)
        canvas.edge([u, v]).traverse('red').thickness(5)
        canvas.node(v).highlight().size('1.25x')
        canvas.node(v).color('orange')
        canvas.pause(0.5)
      }
    }
  }

  useEffect(() => {
    const canvas = createCanvas('graph');
    canvas.remove();
    canvas.size([800, 800]);
    canvas.zoom(1.5);
    canvas.edgelayout('symmetric');
    canvas.nodes(network.nodes).add().color('blue');

    network.edges.map(item => {
      canvas.edge(item.e).add({ length: item.w }).label().add({ text: item.w });
    })
    canvas.pause(2);

    if (isClicked) {
      prim(network.edges, network.nodes, canvas)
      startAnimation(false)
    }
  })

  return (
    <div className="App">
      <div className="graph-section">
        <h2>Kruskal Algorithm</h2>
        <button className="btn" onClick={() => {
          updateNetwork(network1);
          startAnimation(true);
          }}>
          Network1
        </button>
        <button className="btn" onClick={() => {
          updateNetwork(network2);
          startAnimation(true);
          }}>
          Network2
        </button>
        <div id="graph"></div>
        <button className="btn" onClick={() => startAnimation(true)}>
          Replay
        </button>
        
      </div>
    </div>
  );
}

export default App;
