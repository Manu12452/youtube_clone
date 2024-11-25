export const API_KEY = 'AIzaSyBZXjB1sW3Q22jyDQKl9u4esw0bwERXOfw';

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}