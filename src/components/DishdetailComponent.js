import React, {
    Component
} from 'react';
import { Card, CardImg,CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    componentDidMount()
    {
      console.log('In dishdetail componentdidmount method')
    }
    componentDidUpdate()
    {
      console.log('In dishdetail componentdidupdate method')
    }
    renderDish(dish)
    {
        if(dish!=null)
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
        else
            return(
                <div></div>
            );
        
    }
    renderComments(comments)
    {
        if (comments != null && comments !== undefined)
        {
            const commentList = comments.map(item => (
                <li>
                {item.comment}
                <br/><br/>
                -- {item.author},  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}
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
        console.log('In dishdetail render method')
        if(this.props.dish != null && typeof this.props.dish!=="undefined")
        {
            return (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            );
        }
        else
            return(
                <div></div>
            );
        
    }
}
export default Dishdetail;