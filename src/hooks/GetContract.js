import { useContract, useSigner } from 'wagmi'

function GetContract(addr,abi) {
  const { data: signer, isError, isLoading } = useSigner()

  const contract = useContract({
    address: `${addr}`,
    abi: abi,
    signerOrProvider: signer,
  })
}

export default GetContract;