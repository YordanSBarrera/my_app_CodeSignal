import { useState } from "react";
import { AlmostincreasingSequenceFunc } from "../codeSignal/EdgeOfTheOcean";
import { inStringOutArray } from "../codeSignal/FuncionesAux";
import Formulario from "../Formulario";

const AlmostIncreasingSequense = () => {
  const [array, setArray] = useState("0,0");
  const [respuesta, setRespuesta] = useState("True");
  const info = (
    <div>
      <p>
        Given a sequence of integers as an array, determine whether it is
        possible to obtain a strictly increasing sequence by removing no more
        than one element from the array. Note: sequence a0, a1, ..., an is
        considered to be a strictly increasing if a0 - a1 - ... - an. Sequence
        containing only one element is also considered to be strictly increasing
        .
      </p>
      <h3>Example</h3>
      For sequence = [1, 3, 2, 1], the output should be
      almostIncreasingSequence(sequence) = false.
      <br />
      There is no one element in this array that can be removed in order to get
      a strictly increasing sequence. For sequence = [1, 3, 2], the output
      should be almostIncreasingSequence(sequence) = true. You can remove 3 from
      the array to get the strictly increasing sequence [1, 2]. Alternately, you
      can remove 2 to get the strictly increasing sequence [1, 3].
    </div>
  );

  const FunctAlmostIncreasingSequense = () => {
    console.log("In Array..>", array);

    setRespuesta(AlmostincreasingSequenceFunc(inStringOutArray(array)));
  };

  return (
    <div>
      <Formulario
        nameFormulario="AlmostIncreasingSequense"
        valorInial={array}
        info={info}
        setValor={setArray}
        respuesta={respuesta}
        exe={FunctAlmostIncreasingSequense}
      />
    </div>
  );
};
export default AlmostIncreasingSequense;
