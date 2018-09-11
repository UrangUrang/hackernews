import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import Search from './App';
import Button from './App';
import Table from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<App/>);  // Create Component Snapshot
    let tree = component.toJSON(); // Save Component as DOM
    expect(tree).toMatchSnapshot();
  });
});


describe('Search', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search>Search</Search>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Search>Search</Search>); // Create Component Snapshot
    let tree = component.toJSON(); // Save Component as DOM
    expect(tree).toMatchSnapshot();
  })

});


describe('Button', () => {

  it('enzyme test', () => {
    const element = shallow(<Button>Click me</Button>);
    console.log(element.)
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>Click me!!</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Button>Click me!</Button>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});


describe('Table', () => {

  const props = {
    list: [
      {title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y'},
      {title: '2', author: '2', num_comments: 1, points: 2, objectID: 'Z'}
    ]
  };

  it('shows two items in list', () => {

    // shallow는 자식 컴포넌트가 없는 컴포넌트를 렌더링합니다. 이런 방식으로 하나의 컴포넌트를 전담해 테스트를 실시합니다.
    const element = shallow(<Table { ...props } />);
    expect(element.find('.table-row').length).toBe(2);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('table test', () => {
    const component = renderer.create(<Table { ...props } />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});