const requests = {
    join : "/user-service/join",
    login: "/user-service/login",
    getAllUsers: "/user-service/getAllUsers",
    
    joinContent: "/content-service/joinContent",
    getAllContents: "/content-service/getAllContents",
    getContent: "/content-service/getContent",
    updateRating:"/content-service/updateRating",

    joinReview: "/review-service/joinReview",
    getOneContentReview : "/review-service/getOneContentReview"
}
export default requests;