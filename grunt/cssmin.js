module.exports = {
    options: {
        shorthandCompacting: false,
        roundingPrecision: -1
    },
    target: {
        files: {
            'themes/default/theme.css': ['themes/default/src/*.css'],
            'themes/black_yellow/theme.css': ['themes/black_yellow/src/*.css'],
            'themes/blue/theme.css': ['themes/blue/src/*.css'],
            'themes/brown_green/theme.css': ['themes/brown_green/src/*.css'],
            'themes/pink_blue/theme.css': ['themes/pink_blue/src/*.css'],
            'themes/red_black/theme.css': ['themes/red_black/src/*.css'],
            'themes/red_green/theme.css': ['themes/red_green/src/*.css'],
            'styles/main.css': ['styles/src/main.css'],
            'styles/payment.css': ['styles/src/payment.css'],
            'styles/payment_company.css': ['styles/src/payment_company.css'],
            'styles/payment_company_white.css': ['styles/src/payment_company_white.css'],
            'styles/payment_dark.css': ['styles/src/payment_dark.css']
        }
    }
}