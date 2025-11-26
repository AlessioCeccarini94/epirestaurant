import { ListGroup } from "react-bootstrap"

const PastaReview = function (props) {
  return (
    <ListGroup className="text-center">
      {props.pasta.comments.map((c) => {
        return (
          <ListGroup.Item className="mx-auto w-50 " key={c.id}>
            {c.comment}|{c.author}
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default PastaReview
