import math from 'mathjs';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** MathJS Module
 * @namespace MathJS
*/
@RpsModule("mathjs")
export default class RPSMathJs {

  @rpsAction({verbName:'evaluate'})
  async evaluate (ctx:RpsContext,opts:Object, expression:string) : Promise<any>{
    return math.eval(expression,ctx.variables);
  }

}
