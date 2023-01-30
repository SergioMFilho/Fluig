Máscaras usando a lib IMask

Mask CPF:
	IMask(document.getElementById("cpf"), { mask: "000.000.000-00" });

Mask RG:
	IMask(document.getElementById("rg"), { mask: "000.000.000" });

Mask CNPJ:
	IMask(document.getElementById("cnpj"), { mask: "00.000.000/0000-00" });

Mask Número celular:
	IMask(document.getElementById("contato"), { mask: "(00) 00000-0000" });

Mask CEP:
	IMask(document.getElementById("cep"), { mask: "00000-000" });

Mask Datas:
	IMask(document.getElementById("data_de_nascimento"), {
        mask: Date,
        pattern: "d/`m/`Y",
        blocks: {
            d: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 31,
                maxLength: 2,
            },     
            m: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2,
            },
            Y: {
                mask: IMask.MaskedRange,
                from: 19000,
                to: 20230,
                maxLength: 4,
            }
        },
    });

Mask Valores:
	IMask(document.getElementById("valor_solucao"), {

        mask: "R$ num",
        blocks: {
            num: {
                mask: Number,
                thousandsSeparator: ".",
                padFractionalZeros: true,
                normalizeZeros: true,
                radix: ","
            }
        }
    });