import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { VictoryPie } from 'victory';

export default class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <div>VICTORY PIE! COMIN' IN HOT!!!!
        <VictoryPie
          height={180}
          width={180}
          style={{
            data: {
              stroke: (data) => data.y > 0.5 ?
                "tomato" : "black",
              strokeWidth: (data) => data.y > 0.5 ?
                3 : 1
            }
          }}
          style={{
            labels: {
              fill: "red",
              fontSize: 6
            }
          }}
          data = {this.props.projectList
                  ? this.props.projectList.map(val => {
                    console.log("VAL ", val)
                    console.log("val.proj_name ", val.proj_name)
                    console.log('# of PROJ RESOURCES: ', val.resources.length)
                    console.log('TOTAL # of RESOURCES: ', this.props.resourceList.length)
                    console.log('Y VALUE: ', val.resources.length / this.props.resourceList.length)
                    return {
                      x: val.proj_name,
                      y: (val.resources.length / this.props.resourceList.length)
                    }
        }):[]}
        />
      </div>
    );
  }

}
//y: # res on proj/total res
//x: proj name
