
// import {format} from 'date-fns';
const format = require("date-fns")




let rooms=[{room_id:1,
    room_name:rooms-1,
    room_status:"available",
    room_amenities:"TV, Iron box,Washing macine",
    seats:4,
    price_per_hrs:1000

},
{room_id:2,
    room_name:rooms-2,
    room_status:"available",
    room_amenities:"TV, Iron box,Washing macine",
    seats:4,
    price_per_hrs:2000

},
{room_id:3,
    room_name:rooms-3,
    room_status:"available",
    room_amenities:"TV, Iron box,Washing macine",
    seats:8,
    price_per_hrs:1500

},
{room_id:4,
    room_name:rooms-4,
    room_status:"available",
    room_amenities:"TV, Iron box,Washing macine",
    seats:7,
    price_per_hrs:1000

},
{room_id:5,
    room_name:rooms-5,
    room_status:"available",
    room_amenities:"TV, Iron box,Washing macine",
    seats:5,
    price_per_hrs:2000

}
]
let bookingRoom=[]





    
    // All customer with Room Data

    const getAllCustomerData = (req,res)=>{
        try{
const customerList = bookingRoom.map((booking)=>{
    const room =rooms.find((r)=>r.room_id ===booking.roomID)
    return{
        Customer_Name:booking.customer_name,
        Room_Name:room ? rooms.room_name : null,
        Date:booking.Date,
        start_time:booking.start_time,
        end_time:booking.end_time
    }
})
res.status(200).json({
    message:"successfully fetched all customer with booked details",
    customerList
})
        }catch(error){
            res.status(500).json({
                comment:'Internal Server Eror'
            })
        }
    }
    

    module.exports=getAllCustomerData;
       



               