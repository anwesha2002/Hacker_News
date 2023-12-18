export interface CommentModel{
    author? : string,
    created_at? : string,
    children? : CommentModel[],
    text : string,
    id? : string
}