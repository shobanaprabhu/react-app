import React,{Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Routes,Route, Navigate,useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }
  
  render()
  {
    const HomePage = () => {
      return(
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
    />
      );
    }
    const DishWithId = () => {
      let params = useParams();
      return(
          <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(params.dishId,10))} 
            addComment={this.props.addComment} />
      );
    };
    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/home' element={<HomePage/>} />
          <Route path='/menu' element={<Menu dishes={this.state.dishes} />} />
          <Route path='/contactus' element={<Contact/>} />
          <Route path='/aboutus' element={<About leaders={this.state.leaders} />}/>
          <Route path='/menu/:dishId' element={<DishWithId/>} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer/>
      </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);

