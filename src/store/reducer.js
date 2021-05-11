export const defaultState={
url:'https://pixabay.com/api',
api_key:'21568865-bcfa69eefbf26879c6939fcbf',
images:[],
open:false,
currentImg:''
}

export function reducer(state,action){

    switch (action.type) {
        case 'SEARCH_IMAGE':
               
         return {...state,images:action.payload}
            break;

        case 'RESET_IMAGE':
            console.log('erdal')
            return {...state,images:null}

        case 'HANDLE_OPEN':
            return {...state,open:true,currentImg:action.payload}  
            case 'HANDLE_CLOSE':
                return {...state,open:false}      
        default:
            break;
            return state
    }

}
