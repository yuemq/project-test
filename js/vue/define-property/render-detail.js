with(this){
  return _c(
          'div',
          {attrs:{"id":"app"}},
          [
            _c(
                'input',
                {
                  directives:[{name:"model",rawName:"v-model",value:(title),expression:"title"}],
                  domProps:{"value":(title)},
                  on:{"input":function($event){if($event.target.composing)return;title=$event.target.value}}
                }
                ),
            _v(" "),
            _c(
              'button',
              {on:{"click":add}},
              [_v("submit")]),
            _v(" "),
            _c('ul',
              _l((list),function(item){
                return _c(
                          'li',[_v(_s(item))])
                 })
             )
          ]
  )
}