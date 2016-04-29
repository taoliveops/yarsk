import D3Funnel from 'd3-funnel';
import React from 'react';
import ReactDOM from 'react-dom';

const FunnelChart = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    options: React.PropTypes.object,
  },

  componentDidMount: function() {
    var el = ReactDOM.findDOMNode(this);
    var d3Chart = new D3Funnel(el);
    var state = this.getChartState();
    console.log(state.data);
    console.log(state.options);
    d3Chart.draw(state.data, state.options);
  },

//   componentDidUpdate: function() {
//     var el = this.getDOMNode();
//     d3Chart.update(el, this.getChartState());
//   },

  getChartState: function() {
    var data = [
          ['Plants',     5000],
          ['Flowers',    2500],
          ['Perennials', 200],
          ['Roses',      50],
    ];
    var options = {
      chart: {
        width: 500,
        height: 300,
      }
    };
    return {
      data: data,
      options: options,
    };
  },

//   componentWillUnmount: function() {
//     var el = this.getDOMNode();
//     d3Chart.destroy(el);
//   },

  render: function() {
    return (
      <div></div>
    );
  },
});

export default FunnelChart;
