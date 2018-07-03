import {expect} from 'chai';
import m from 'mocha';

import RPSMathJs from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('MathJS', () => {

  m.it('should evaluate expression', async function () {
    let math = new RPSMathJs;
    let ctx = new RpsContext;
    ctx.variables = {$a:3};
    let output = await math.evaluate(ctx,{},"$c = $a + 2");

    expect(output).to.be.equals(5);
    expect(ctx.variables['$c']).to.be.equals(5);

  }).timeout(0);

})
