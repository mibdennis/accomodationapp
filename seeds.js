var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");

var data = [
    {
        name: "Cherry Hill Park",
        image: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        description: "A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South."
    },
    {
        name: "Camp Fire Patuxent", 
		image: "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		description: "An action-packed story of one young woman's journey to discover the truth of who she is and her fight to change the world."
    },
    {
        name: "Greenbelt Campground",
        image: "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years."
    },
    {
        name: "The Wandering Earth",
        image: "https://images.pexels.com/photos/682016/pexels-photo-682016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        description: "The sun was dying out, people all around the world built giant planet thrusters to move Earth out of its orbit and to sail Earth to a new star system. Yet the 2500 years journey came with unexpected dangers, and in order to save humanity, a group of young people in this age of a wandering Earth came out boldly and fought hard for everyone's survival."
    },
    {
        name: "The Favourite",
        image: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        description: "In early 18th century England, a frail Queen Anne occupies the throne and her close friend, Lady Sarah, governs the country in her stead. When a new servant, Abigail, arrives, her charm endears her to Sarah."
    }
    ];

function seedsDB(){
    Campground.remove({},function(err){
        if(err){
            console.log(err);
        } else {
            console.log("campgrounds removed.")
            //add new campgrounds:
            data.forEach(function(seed){
                Campground.create(seed, function(err,campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("a campground has been added.");
                        
                        Comment.create(
                            {
                                text: "This movie is fantastic.",
                                author: "Janney"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Create a new comment");
                                }
                            })
                    }
                })            
            })
        }
    });
}

module.exports = seedsDB;