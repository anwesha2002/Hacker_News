import {CommentModel} from "../Model/CommentModel.ts";



export function LimitComments(commnets : CommentModel[]){
    const i: number = 10;
    return commnets.slice(0, i)
}