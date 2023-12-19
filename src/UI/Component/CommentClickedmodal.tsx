import {Modal} from "react-bootstrap";

type CommentModalProps = {
    onDismiss : () => void,
    text :string,
    author? : string
}
export function CommentClickedModal({onDismiss, text, author} : CommentModalProps){
    return(
        <Modal show onHide={onDismiss} className="p-4">
            <Modal.Header closeButton>
                <Modal.Title>
                    {author}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body dangerouslySetInnerHTML={{__html:text}}/>
        </Modal>
    )
}