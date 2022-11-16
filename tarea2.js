var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
6;
var ErrorValidacion = /** @class */ (function (_super) {
    __extends(ErrorValidacion, _super);
    function ErrorValidacion(mensaje) {
        var _this = _super.call(this, mensaje) || this;
        _this.name = "ErrorValidacion";
        return _this;
    }
    return ErrorValidacion;
}(Error));
function login(usuario, contrasenia) {
    if (usuario !== 'axel' && contrasenia !== 'oreo') {
        throw new ErrorValidacion('Usuario y/o contraseña incorrectos');
    }
    if (usuario !== 'axel') {
        throw new ErrorValidacion('Usuario incorrecto');
    }
    if (contrasenia !== 'oreo') {
        throw new ErrorValidacion('Constraseña incorrecto');
    }
    return "Tu usuario es ".concat(usuario, " y tu contrase\u00F1a es ").concat(contrasenia);
}
try {
    var user = login('axel', 'oreo');
    console.log(user);
}
catch (err) {
    console.log("Dato Invalido: " + err.message);
}
