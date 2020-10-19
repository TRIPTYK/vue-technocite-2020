const app = Vue.createApp({
  data() {
    return {
      amis: [
        {
          id: 1,
          name: "Gilles Bertrand",
          phone: "00235202652",
          email: "gilles@triptyk.eu",
        },
        {
          id: 2,
          name: "Anissa Belkheir",
          phone: "00235202652",
          email: "anissa@triptyk.eu",
        },
        {
          id: 3,
          name: "Geoffrey Denys",
          phone: "00235202652",
          email: "geoffrey@triptyk.eu",
        },
      ],
      isDetailsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
  },
});
app.component("ami-contact", {
  template: `
    <li :key="ami.id" class="bg-white rounded-lg shadow">
            <div class="w-full flex items-center justify-between p-6 space-x-6">
                <div class="flex-1 truncate">
                    <div class="flex items-center space-x-3 ">
                        <h3 class="text-gray-900 text-4xl  font-medium">{{ami.name}}</h3>
                    </div>
                    <button type="button" @click="toggleDetails"
                        class="p-1 rounded-lg border border-blue-300 text-gray-700 hover:bg-blue-300 text-white">Show
                        details</button>
                </div>
            </div>
            <div v-if="isDetailsVisible" class="border-t border-gray-200">
                <div class="-mt-px flex">
                    <div class="w-0 flex-1 flex border-r border-gray-200">
                        <p
                            class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
                            <span class="font-medium text-indigo-500">Email</span> : {{ami.email}}
                        </p>
                    </div>
                    <div class="-ml-px w-0 flex-1 flex">
                        <p
                            class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
                            <span class="font-medium text-indigo-500">phone</span> : {{ami.phone}}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    `,
  data() {
    return {
      isDetailsVisible: false,
      ami: {
        id: 1,
        name: "Gilles Bertrand",
        phone: "00235202652",
        email: "gilles@triptyk.eu",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
  },
});
app.mount("#root");
