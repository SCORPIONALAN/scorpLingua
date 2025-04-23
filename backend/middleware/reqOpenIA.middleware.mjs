
const requestLimit = 10;
const usuarios = {};
setInterval(()=>{
    for(const usuario of usuarios){
        delete usuarios[usuario];
    }
},  86400000)
export const MiddlewarePrompt = async(req, res) =>{
    const {userID} = req.body;
    if(!usuarios[userID]){
        usuarios[userID] = {intentos: 1};
    }else{
        if(usuarios[userID].intentos > requestLimit){
            return res.status(429).json({message: "Peticiones alcanzadas por el día de hoy amiguito"})
        }else{
            usuarios[userID].intentos += 1;
        }
    }
    next();
}