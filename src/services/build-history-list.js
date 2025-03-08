export default function buildHistoryList(appointmentHistory) {
    const list = document.querySelector(".history ul")
    list.innerHTML = ''

    const icon_container = document.createElement("div")
    icon_container.classList.add("icon-container")

    const seal_check_icon = document.createElement("i")
    seal_check_icon.classList.add("ph", "ph-seal-check")

    icon_container.appendChild(seal_check_icon)

    appointmentHistory.forEach(appointment => {
        const li = document.createElement("li")
        
        const history_detail = document.createElement("div")
        history_detail.classList.add('history-detail')

        const date = document.createElement("p")
        date.classList.add("subtitle-sm")
        date.innerHTML = appointment.date

        const time = document.createElement("p")
        time.classList.add("text-xs")
        time.innerHTML = appointment.time

        const icon_container_clone = icon_container.cloneNode(true)

        history_detail.append(date, time)
        li.append(history_detail, icon_container_clone)

        list.append(li)
    });

    document.querySelector(".cuts-count span").innerHTML = appointmentHistory.length
}