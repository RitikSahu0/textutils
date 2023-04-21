export function Invitation(props){
return 
(<p>  
Subject :{props.party}

To : { props.email}

Hi , {props.hey}

I am having a {props.bithday} Bnext Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them - {props.names}

My house is behind our school , near{props.address}

I hope you will come and see you soon .

from ,
{ props.from}
</p>
)
}