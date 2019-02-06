<template>
  <div style="margin-left:20px; margin-right:20px;margin-top:8px">
    <v-toolbar flat color="white">
      <v-toolbar-title>Mis Respaldos</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog>
          <v-btn slot="activator" color="primary" dark class="mb-2" @click="nuevo">
              Nuevo Respaldo
          </v-btn>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.fecha }}</td>
        <td class="text-xs-left">{{ props.item.hora }}</td>
        <td class="text-xs-left">{{ props.item.estatus }}</td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      time: null,
      menu2: false,
      modal2: false,
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Database', value: 'name' },
        { text: 'Fecha', value: 'fecha' },
        { text: 'Hora', value: 'hora' },
        { text: 'Estatus', value: 'estatus' },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        fecha: '',
        hora: '',
        estatus: 0
      },
      defaultItem: {
        id: '',
        name: '',
        fecha: '',
        hora: '',
        estatus: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      nuevo(){
          this.$router.push({ name: 'nuevo' })
      },
      initialize () {
        this.desserts = [
          {
            id: '1',
            name: 'dumpMexTr_12010012',
            fecha: '12-12-12',
            hora: '24',
            estatus: 0
          },
          {
            id: '2',
            name: 'dumpMexTr_02011013',
            fecha: '12-12-12',
            hora: '37',
            estatus: 1 
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>