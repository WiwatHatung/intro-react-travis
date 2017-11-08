import React from 'react';
var DemoTest = React.createClass({
    render: function(){
        var name = 'Tyler McGinnis'
        var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
        return (
            <div>
                <h3> Name: {name} </h3>
                <ShowList names={friends} />
            </div>
        )
    }
});
export default DemoTest;