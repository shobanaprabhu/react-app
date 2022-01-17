import React, {
    Component
} from 'react';
import { Card, CardImg,CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    renderDish(dish)
    {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            
        )
        
    }
    renderComments(comments)
    {
        if (comments != null)
        {
            const commentList = comments.map(item => (
                <li>
                {item.comment}
                <br/><br/>
                -- {item.author},  {item.date}
                <br/><br/>
                </li>
            )
            );
            return (
                <div className="col-12 col-md-5 m-1">
                   <h4>Comments</h4> 
                   <ul className="list-unstyled">{commentList} </ul>
                </div>
            )
        }
        else
            return(
                <div></div>
            );
    }
    render()
    {
        
        return (
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish.comments)}
            </div>
        );
    }
}
export default Dishdetail;