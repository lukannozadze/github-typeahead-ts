import { useUserProvider } from "../../../provider/UserProvider";

function generateSelectOptions() {
  const { users } = useUserProvider();
  const usersQuantity = users?.length;
  let selectUsers = 5;
  const selectItemsArr: number[] = [];
  const index = Math.round((usersQuantity as number) / 5);

  for (let i = 0; i < index; i++) {
    selectItemsArr.push(selectUsers);
    selectUsers += 5;
  }

  if ((usersQuantity as number) % 5 !== 0) {
    selectItemsArr[index - 1] = usersQuantity as number;
  }

  return selectItemsArr;
}

export default generateSelectOptions;
