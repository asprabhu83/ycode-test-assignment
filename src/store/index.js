import { createStore } from 'vuex'

export default createStore({
  state: {
    Layers:[],
    Designs:[{
      designLabel: "Background Color",
      values:[{
        displayText: "#000000",
        classValue: 'bg-black'
      },{
        displayText: "#FFFFFF",
        classValue: 'bg-white'
      },{
        displayText: "#1a202c",
        classValue: 'bg-gray-900'
      },{
        displayText: "#742a2a",
        classValue: 'bg-red-900'
      },
      {
        displayText: "#7b341e",
        classValue: 'bg-orange-900'
      },
      {
        displayText: "#744210",
        classValue: 'bg-yellow-100'
      },{
        displayText: "#22543d",
        classValue: 'bg-green-900'
      },
      {
        displayText: "#234e52",
        classValue: 'bg-teal-600'
      }],
      designValue:'#FFFFFF',
      designType:'color'
    },{
      designLabel: "Font Family",
      values:[{
        displayText: "Sans",
        classValue: 'font-sans'
      },{
        displayText: "Serif",
        classValue: 'font-serif'
      },
      {
        displayText: "Mono",
        classValue: 'font-mono'
      }],
      designValue:'',
      designType:'select'
    },
    {
      designLabel: "Font Weight",
      values:[{
        displayText: "Thin",
        classValue: 'font-thin'
      },{
        displayText: "Extra Light",
        classValue: 'font-extralight'
      },
      {
        displayText: "Light",
        classValue: 'font-light'
      },
      {
        displayText: "Normal",
        classValue: 'font-normal'
      },
      {
        displayText: "Medium",
        classValue: 'font-medium'
      },
      {
        displayText: "SemiBold",
        classValue: 'font-semibold'
      },
      {
        displayText: "Extra Bold",
        classValue: 'font-extrabold'
      },
      {
        displayText: "Black",
        classValue: 'font-black'
      }],
      designValue:'',
      designType:'select'
    },{
      designLabel: "Font Size",
      values:[{
        displayText: "Extra Small",
        classValue: 'text-xs'
      },{
        displayText: "Small",
        classValue: 'text-sm'
      },
      {
        displayText: "Normal",
        classValue: 'text-base'
      },
      {
        displayText: "Large",
        classValue: 'text-lg'
      },
      {
        displayText: "Extra Large",
        classValue: 'text-xl'
      },
      {
        displayText: "Extra Large 2",
        classValue: 'text-2xl'
      }],
      designValue:'',
      designType:'select'
    },{
      designLabel: "Text Align",
      values:[{
        displayText: "Left",
        classValue: 'text-left'
      },{
        displayText: "Center",
        classValue: 'text-center'
      },
      {
        displayText: "Right",
        classValue: 'text-right'
      }],
      designValue:'',
      designType:'select'
    },{
      designLabel: "Text Color",
      values:[{
        displayText: "#000000",
        classValue: 'text-black'
      },{
        displayText: "#FFFFFF",
        classValue: 'text-white'
      },
      {
        displayText: "#1a202c",
        classValue: 'text-gray-900'
      },{
        displayText: "#742a2a",
        classValue: 'text-red-900'
      },
      {
        displayText: "#7b341e",
        classValue: 'text-orange-900'
      },
      {
        displayText: "#744210",
        classValue: 'text-yellow-100'
      },{
        displayText: "#22543d",
        classValue: 'text-green-900'
      },
      {
        displayText: "#234e52",
        classValue: 'text-teal-600'
      }],
      designValue:'#FFFFFF',
      designType:'color'
    },
    {
      designLabel: "Text Decoration",
      values:[{
        displayText: "Underline",
        classValue: 'underline'
      },{
        displayText: "Line Through",
        classValue: 'line-through'
      },
      {
        displayText: "None",
        classValue: 'no-underline'
      }],
      designValue:'',
      designType:'select'
    },{
      designLabel: "Text Transform",
      values:[{
        displayText: "None",
        classValue: 'normal-case'
      },{
        displayText: "Uppercase",
        classValue: 'uppercase'
      },{
        displayText: "Lowercase",
        classValue: 'lowercase'
      },
      {
        displayText: "Capitalize",
        classValue: 'capitalize'
      }],
      designValue:'',
      designType:'select'
    }]
  },
  mutations: {
    addLayers(state, payload){
      state.Layers.push(payload)
    },
    clearDesignValues(state) {
      state.Designs.forEach(design=>{
        if(design.desighType==='select')
          design.designValue=""
        else 
         design.designValue="#FFFFFF"
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
