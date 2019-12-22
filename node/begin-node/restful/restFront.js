function getUser() {
    var xhr = XMLHttpRequest()
    xhr.onload = function() {
        if (xhr.status === 200) {
            var users = JSON.parse(xhr.responseText)
            var list = document.getElementById("list")
            list.innerHTML = "";

            Object.keys(users).map(function(key) {
                var userDiv = document.createElement("div")
                var span = document.createElement("span")
                span.textContent = users[key]

                var edit = document.createElement("button")
                edit.textContent = "edit"
                edit.addEventListener("click", function() {
                    var name = prompt("insert name~")
                    if (!name) {
                        return alert("insert name")
                    }
                    var xhr = new XMLHttpRequest
                    xhr.onload = function() {
                        if (xhr.status === 200) {
                            console.log(xhr.responseText)
                            getUser()
                        } else {
                            console.error(xhr.responseText)
                        }
                    }
                    xhr.open("PUT", "/users/" + key)
                    xhr.setRequestHeader("Content-Type", "application/json")
                    xhr.send(JSON.stringify( {name: name} ))
                })
                var remove = document.createElement("button")
                remove.textContent = "delete"
                remove.addEventListener("click", function() {
                    var xhr = new XMLHttpRequest
                    xhr.onload = functon() {
                        if (xhr.status === 200) { 
                            console.log(xhr.responseText)
                            getUser()
                        } else {
                            console.error(xhr.responseText)
                        }
                    }
                    xhr.open("DELETE", "/uers/", + key)
                    xhr.send()
                }
            })
        }
    }
}