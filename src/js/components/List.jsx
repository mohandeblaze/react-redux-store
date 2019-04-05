import React from "react";
import { connect } from "react-redux";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";

const mapStateToProps = state => {
  return { articles: state.articles, addItem: state.addItem };
};

const ConnectedList = ({ articles, addItem }) => (
  <div>
    <ul className="list-group list-group-flush">
      {articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
        </li>
      ))}
    </ul>
    <ListViewComponent height={100} dataSource={addItem} />
  </div>
);

const List = connect(mapStateToProps)(ConnectedList);
export default List;
