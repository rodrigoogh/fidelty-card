const applyMask = (value, mask) => mask.replace(/#/g, () => value.shift() || "")
const formatValue = (value, mask) => applyMask([...value.replace(/\D/g, '')], mask)

export function updateUserInfo({id, name, clientSince}) {
    const card_id = id.padStart(12, 0)
    document.querySelector(".user-name").innerHTML = name;
    document.querySelector(".user-info span").innerHTML = clientSince
    document.querySelector(".fidelty-card-id p span").innerHTML = formatValue(card_id, "###-###-###-###")

    const timestamp = new Date().getTime()
    document.querySelector(".card-image img").src = `https://i.pravatar.cc/?delta=${timestamp}`
}
