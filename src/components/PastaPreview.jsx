import { ListGroup } from "react-bootstrap"

const PastaReview = function (props) {
  return (
    <ListGroup>
      {props.pasta.comments.map((c) => {
        return (
          <ListGroup.Item key={c.id}>
            {c.comment}|{c.author}
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default PastaReview
