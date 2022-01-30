import React from 'react';
import { Card, CardImg,CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish})
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
function RenderComments({comments})
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
const  Dishdetail = (props) => {
    if(props.dish != null && typeof props.dish!=="undefined")
        {
            return (
                <div className="row">
                    <RenderDish dish={props.dish}></RenderDish>
                    <RenderComments comments={props.dish.comments}></RenderComments>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
}
export default Dishdetail;