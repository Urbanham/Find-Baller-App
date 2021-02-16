const playerlist = new Vue({
    el: '#players',
    data: {
        appName: 'Ball-is-life',
        playerNames: [],
        selectedPlayerID: "",
        selectedPlayerObj: {},
        firstSearch: false,
        spinBall: "images/spinningBall.gif",

    },
    methods: {
        search: async function () {

            const firstName = document.getElementById("searchBar").value
            const query = `?name=${firstName}`
            const response = await axios.get(`http://localhost:8000/api/search${query}`)
            this.playerNames = response.data

            this.firstSearch = false
        },
        fetch: async function () {
            const id = this.selectedPlayerID
            console.log(id)

            const query = `?playerId=${id}`
            const response = await axios.get(`http://localhost:8000/api/fetch${query}`)

            this.selectedPlayerObj = response.data
            console.log("this is the selected player object ")
            console.log(this.selectedPlayerObj)
            this.firstSearch = true
        },

    },
    computed: {
        numberOfPlayers: function () {
            return this.playerNames.length
        }
    },


})