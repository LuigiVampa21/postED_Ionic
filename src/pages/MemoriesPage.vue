<template>
  <IonPage>
    <base-layout page-title="All Memories">
      <IonList>
        <IonItem router-link="/memories/1">Flavio</IonItem>
        <IonItem>Giuse</IonItem>
        <IonItem>Marco</IonItem>
        <IonItem>Daniele</IonItem>
      </IonList>
    </base-layout>
  </IonPage>
</template>

<script>
import { IonPage, IonList, IonItem } from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonList,
    IonItem,
  },
};
</script>

<style></style>
