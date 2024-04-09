import { ref } from 'vue';

//Counter Composable for "./component/MyComponent.vue"

export function useCounter(initialVal = 0) {
    const count = ref(initialVal)

    //fxs.
    const increment = () => count.value++;
    const decrement = () => count.value--;
    const reset = () => count.value = 0;

    return { count, increment, decrement, reset };
}