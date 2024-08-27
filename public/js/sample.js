function getSample() {
    DB.database = {
        "name": 'fc_barcelona',
        "tables": [{
                'name': 'players',
                'top': '100px',
                'left': '100px',
                'id': 1,
                'refs': [2, 3], // For FK's
                'attributes': [{
                    'name': 'id',
                    'type': 'Numeric',
                    'size': 11,
                    'constraints': ['PRIMARY KEY']
                }, {
                    'name': 'first_name',
                    'type': 'Varchar',
                    'size': 20,
                    'constraints': []
                }, {
                    'name': 'last_name',
                    'type': 'Varchar',
                    'size': 20,
                    'constraints': []
                }, {
                    'name': 'position',
                    'type': 'Varchar',
                    'size': 20,
                    'constraints': []
                }]
            },
            {
                'name': 'goals',
                'top': '300px',
                'left': '100px',
                'id': 2,
                'refs': [1], // Refers to players
                'attributes': [{
                    'name': 'goal_id',
                    'type': 'Numeric',
                    'size': 11,
                    'constraints': ['PRIMARY KEY']
                }, {
                    'name': 'player_id',
                    'type': 'Numeric',
                    'size': 11,
                    'constraints': ['FOREIGN KEY']
                }, {
                    'name': 'match_date',
                    'type': 'Date',
                    'size': '',
                    'constraints': []
                }, {
                    'name': 'minutes_scored',
                    'type': 'Numeric',
                    'size': 3,
                    'constraints': []
                }]
            },
            {
                'name': 'trophies',
                'top': '500px',
                'left': '100px',
                'id': 3,
                'refs': [1, 4], // Refers to players and trophy_types
                'attributes': [{
                    'name': 'trophy_id',
                    'type': 'Numeric',
                    'size': 11,
                    'constraints': ['PRIMARY KEY']
                }, {
                    'name': 'player_id',
                    'type': 'Numeric',
                    'size': 11,
                    'constraints': ['FOREIGN KEY']
                }, {
                    'name': 'trophy_type_id',
                    'type': 'Numeric',
                    'size': 11,
                    'constraints': ['FOREIGN KEY']
                }, {
                    'name': 'year_won',
                    'type': 'Numeric',
                    'size': 4,
                    'constraints': []
                }]
            },
            {
                'name': 'trophy_types',
                'top': '500px',
                'left': '500px',
                'id': 4,
                'refs': [],
                'attributes': [{
                    'name': 'id',
                    'type': 'Numeric',
                    'size': 11,
                    'constraints': ['PRIMARY KEY']
                }, {
                    'name': 'name',
                    'type': 'Varchar',
                    'size': 50,
                    'constraints': []
                }]
            }
        ]
    };
    DB.redraw();
    DB.redrawLines();
}
