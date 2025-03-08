import blow from "../../confetti/fire";
import buildHistoryList from "../../services/build-history-list";
import { fetchClient } from "../../services/fetch-client";
import { updateFideltyCard } from "../../services/update-fidelty-card";
import { updateUserInfo } from "../../services/update-user-info";
import { updateProgress } from "../../services/update.progress";


const form = document.getElementById("form-search");

form.onsubmit = async function(event) {
    event.preventDefault()

    const {target} = event

    const search = new URLSearchParams(new FormData(target)).get('search')

    if (!search || isNaN(search)) {
        alert('Número de cartão inválido.')
        return
    }

    const {appointmentHistory, name, clientSince, id, loyaltyCard} = await fetchClient(search)
    const userInfo = {
        name, 
        clientSince,
        id
    }

    updateUserInfo(userInfo)
    buildHistoryList(appointmentHistory)
    updateFideltyCard(loyaltyCard.totalCuts)
    updateProgress(loyaltyCard)

    if (loyaltyCard.cutsNeeded === loyaltyCard.totalCuts) {
        blow()
        alert("Parabéns! Seu próximo corte é gratuito!")
    }

}