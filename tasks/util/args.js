import yargs from 'yargs'

const args = yargs
    .option('production', {
        boolean:true,
        default: false
    })
    .option("watch", {
        boolean: true,
        default: false
    })
    .option("verbase", {
        boolean: true,
        default: false
    })
    .option("sourcemaps", {
        describe: 'force the creation of sourcemaps'
    })
    .option('port', {
        string: true,
        default:8000,
        describe: 'port 8000'
    })
    .argv

export default args;