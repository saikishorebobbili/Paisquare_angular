export class User {
    id!:Number;
    email!:String;
    username!:String;
    firstname!:String;
    lastname!:String;
    password!:String;
    constructor(){}
}

export class Advertise{
    brandname!:String;
    description!:String;
    url!:String
    pai!:Number;
    paiperclick!:Number;
    paisa!:Number;
    paisaperclick!:Number;
    country!:String;
    state!:String;
    district!:String;
    constructor(){}
}
export class Contactus{
    name!:String; 
    email!:String;
    username!:String;
    userid!:Number;
    mobilenumber!:String;
    issue!:String;
    opendate!:String;
    closedate!:String;
    remarks!:String;
    constructor(){}
}

export class Profile{
    username!:String;
    bio!:String;
    brandname!:String;
    firstname!:String;
    lastname!:String;
    email!:String;
    followers!:Number;
    ads!:Number;
    mobilenumber!:Number;
    country!:String;
    address!:String;
    website!:String;
    youtube!:String;
    facebook!:String;
    instagram!:String;
    twitter!:String;
    pinterest!:String;
}

export class Comments{
    advertisementid!:Number;
    userid!:String;
    adid!:Number;
    comment!:String;
    remark!:String;
    temp1!:String;
}

export class Follower{
    advertiserid!:Number;
    userid!:String;
    following!:boolean;
}

export class Visited{
    advertisementid!:Number;
    userid!:String;
    visited!:boolean;
}

export class Like{
    advertisementid!:Number;
    userid!:String;
    visited!:boolean;
}

export class Block{
    advertiserid!:Number;
    userid!:String;
    Blocked!:boolean;
}

export class Report{
    advertisementid!:Number;
    userid!:String;
    reportedtext!:String;
}

export class Favourite{
    advertisementid!:Number;
    userid!:String;
}