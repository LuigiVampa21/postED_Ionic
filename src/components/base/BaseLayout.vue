<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="defaultBackLink"></ion-back-button>
        </ion-buttons>
        <IonTitle>{{ pageTitle }}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <slot />
    </IonContent>
  </IonPage>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";
export default {
  props: ["pageTitle", "defaultBackLink"],
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonBackButton,
    IonButtons,
  },
};
</script>

<style></style>
